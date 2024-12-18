import { eq } from 'drizzle-orm';
import { db } from '.';
import { groupMembers, groups, users } from './schema';
import type { Group, GroupMember } from '$lib/types';

export interface GetGroupGroupMember extends GroupMember {
	image: string | null;
	name: string | null;
}

export async function getGroups(
	userId: number
): Promise<{ groups: Group; group_members: GetGroupGroupMember[] | null }[]> {
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
