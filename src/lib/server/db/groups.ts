import { eq } from 'drizzle-orm';
import { db } from '.';
import { groupMembers, groups, users } from './schema';
import type { Group, GroupMember } from '$lib/types';
import { generateRandomCode } from '$lib/generateRandomCode';

export interface GetGroupGroupMember extends GroupMember {
	image: string | null;
	name: string | null;
}

export async function getGroups(
	userId: number
): Promise<{ groups: Group; group_members: GetGroupGroupMember[] }[]> {
	try {
		const groupsResult = await db
			.select({
				groups
			})
			.from(groups)
			.leftJoin(groupMembers, eq(groupMembers.userId, userId))
			.leftJoin(users, eq(users.id, userId))
			.where(eq(groups.id, groupMembers.groupId));

		const result = await Promise.all(
			groupsResult.map(async (g) => {
				const group_members = await getGroupMembers(g.groups.id);
				return { groups: g.groups, group_members };
			})
		);
		return result;
	} catch (error) {
		console.error('getting groups error:', error);
		if (error instanceof Error) {
			throw new Error(`Failed to get groups: ${error.message}`);
		}
		throw new Error('Unexpected error while getting groups');
	}
}

export async function getGroupMembers(groupId: number): Promise<GetGroupGroupMember[]> {
	try {
		const groupMembersResult = await db
			.select({
				id: groupMembers.id,
				joinedAt: groupMembers.joinedAt,
				groupId: groupMembers.groupId,
				userId: groupMembers.id,
				role: groupMembers.role,
				image: users.image,
				name: users.name
			})
			.from(groupMembers)
			.leftJoin(users, eq(users.id, groupMembers.userId))
			.where(eq(groupMembers.groupId, groupId));

		return groupMembersResult;
	} catch (error) {
		console.error('getting group members error:', error);
		if (error instanceof Error) {
			throw new Error(`Failed to get group members: ${error.message}`);
		}
		throw new Error('Unexpected error while getting group members');
	}
}

export async function createGroup(
	name: string,
	userId: number
): Promise<{ group: Group; groupMember: GroupMember }> {
	try {
		const inviteCode = generateRandomCode();
		const [groupResult] = await db.insert(groups).values({ name, inviteCode }).returning();
		const [groupMembersResult] = await db
			.insert(groupMembers)
			.values({ groupId: groupResult.id, userId, role: 'admin' })
			.returning();
		return { group: groupResult, groupMember: groupMembersResult };
	} catch (error) {
		console.error('creating group error:', error);
		if (error instanceof Error) {
			throw new Error(`Failed to create group: ${error.message}`);
		}
		throw new Error('Unexpected error while creating group');
	}
}

export async function joinGroup(
	inviteCode: string,
	userId: number
): Promise<{ groupMember: GroupMember }> {
	try {
		const [groupResult] = await db.select().from(groups).where(eq(groups.inviteCode, inviteCode));
		if (!groupResult) {
			throw new Error('Invitee code invalid');
		}
		const [groupMembersResult] = await db
			.insert(groupMembers)
			.values({ groupId: groupResult.id, userId, role: 'member' })
			.returning();

		return { groupMember: groupMembersResult };
	} catch (error) {
		console.error('joining group error:', error);
		if (error instanceof Error) {
			throw new Error(`Failed to join group: ${error.message}`);
		}
		throw new Error('Unexpected error while joining group');
	}
}
