import type { RequestEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { Restaurant } from '$lib/types';

export async function load({ request, url }: RequestEvent) {
	const offset = url.searchParams.get('offset') || '0';
	const limit = 20;
	// const response = await fetch(`/api/restaurants?offset=${offset}`);

	// const data = await res.json();

	const businesses: Restaurant[] = [
		{
			id: 'crM1idgY_glhtxXT5kERNg',
			alias: 'kingyo-vancouver',
			name: 'Kingyo',
			image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/A33fW_IU1WhwBDeZHYpyPQ/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/kingyo-vancouver?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 1224,
			categories: [
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'tapasmallplates',
					title: 'Tapas/Small Plates'
				}
			],
			rating: 4.4,
			coordinates: {
				latitude: 49.29073911099211,
				longitude: -123.13705023185994
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '871 Denman Street',
				address2: '',
				address3: '',
				city: 'Vancouver',
				zip_code: 'V6G 2L9',
				country: 'CA',
				state: 'BC',
				display_address: ['871 Denman Street', 'Vancouver, BC V6G 2L9', 'Canada']
			},
			phone: '+16046081677',
			display_phone: '+1 604-608-1677',
			distance: 3406.7741059201785,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1200',
							end: '1430',
							day: 0
						},
						{
							is_overnight: false,
							start: '1630',
							end: '2200',
							day: 0
						},
						{
							is_overnight: false,
							start: '1200',
							end: '1430',
							day: 1
						},
						{
							is_overnight: false,
							start: '1630',
							end: '2200',
							day: 1
						},
						{
							is_overnight: false,
							start: '1200',
							end: '1430',
							day: 2
						},
						{
							is_overnight: false,
							start: '1630',
							end: '2200',
							day: 2
						},
						{
							is_overnight: false,
							start: '1200',
							end: '1430',
							day: 3
						},
						{
							is_overnight: false,
							start: '1630',
							end: '2200',
							day: 3
						},
						{
							is_overnight: false,
							start: '1200',
							end: '1430',
							day: 4
						},
						{
							is_overnight: false,
							start: '1630',
							end: '2200',
							day: 4
						},
						{
							is_overnight: false,
							start: '1200',
							end: '1430',
							day: 5
						},
						{
							is_overnight: false,
							start: '1630',
							end: '2200',
							day: 5
						},
						{
							is_overnight: false,
							start: '1200',
							end: '1430',
							day: 6
						},
						{
							is_overnight: false,
							start: '1630',
							end: '2200',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: false
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: null,
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: '4EV_ZcQmjAmP3pmO-_nb2A',
			alias: 'miku-vancouver-2',
			name: 'Miku',
			image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/zlAuR8-YjU_eExQc7LEbDA/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/miku-vancouver-2?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 2428,
			categories: [
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				}
			],
			rating: 4.4,
			coordinates: {
				latitude: 49.28691298612272,
				longitude: -123.11304877258942
			},
			transactions: [],
			price: '$$$',
			location: {
				address1: '200 Granville Street',
				address2: 'Suite 70',
				address3: '',
				city: 'Vancouver',
				zip_code: 'V6C 1S4',
				country: 'CA',
				state: 'BC',
				display_address: ['200 Granville Street', 'Suite 70', 'Vancouver, BC V6C 1S4', 'Canada']
			},
			phone: '+16045683900',
			display_phone: '+1 604-568-3900',
			distance: 2638.172720384703,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1130',
							end: '2200',
							day: 0
						},
						{
							is_overnight: false,
							start: '1130',
							end: '2200',
							day: 1
						},
						{
							is_overnight: false,
							start: '1130',
							end: '2200',
							day: 2
						},
						{
							is_overnight: false,
							start: '1130',
							end: '2200',
							day: 3
						},
						{
							is_overnight: false,
							start: '1130',
							end: '2200',
							day: 4
						},
						{
							is_overnight: false,
							start: '1200',
							end: '2200',
							day: 5
						},
						{
							is_overnight: false,
							start: '1200',
							end: '2200',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: false
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'https://mikurestaurant.com/menu-main',
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: 'GmEeIcJ9vR04kxzYgPMEgg',
			alias: 'guu-with-garlic-vancouver-2',
			name: 'Guu with Garlic',
			image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/A1wPc9kltHE-0ZtMTGnTjA/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/guu-with-garlic-vancouver-2?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 1098,
			categories: [
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'tapasmallplates',
					title: 'Tapas/Small Plates'
				}
			],
			rating: 4.3,
			coordinates: {
				latitude: 49.290249,
				longitude: -123.1338142
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '1698 Robson Street',
				address2: '',
				address3: '',
				city: 'Vancouver',
				zip_code: 'V6G 1C7',
				country: 'CA',
				state: 'BC',
				display_address: ['1698 Robson Street', 'Vancouver, BC V6G 1C7', 'Canada']
			},
			phone: '+16046858678',
			display_phone: '+1 604-685-8678',
			distance: 3257.0203971774486,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1130',
							end: '1430',
							day: 0
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2330',
							day: 0
						},
						{
							is_overnight: false,
							start: '1130',
							end: '1430',
							day: 1
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2330',
							day: 1
						},
						{
							is_overnight: false,
							start: '1130',
							end: '1430',
							day: 2
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2330',
							day: 2
						},
						{
							is_overnight: false,
							start: '1130',
							end: '1430',
							day: 3
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2330',
							day: 3
						},
						{
							is_overnight: false,
							start: '1130',
							end: '1430',
							day: 4
						},
						{
							is_overnight: true,
							start: '1700',
							end: '0100',
							day: 4
						},
						{
							is_overnight: true,
							start: '1130',
							end: '0030',
							day: 5
						},
						{
							is_overnight: false,
							start: '1130',
							end: '2330',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: true
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'https://guu-izakaya.com/Menu-Garlic',
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: 'gt1BSfVFvzI-qHdJ3LUZug',
			alias: 'blue-water-cafe-vancouver',
			name: 'Blue Water Cafe',
			image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/Oll5duzZPe8MNYqUtDgTug/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/blue-water-cafe-vancouver?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 1154,
			categories: [
				{
					alias: 'seafood',
					title: 'Seafood'
				}
			],
			rating: 4.4,
			coordinates: {
				latitude: 49.2761945,
				longitude: -123.1209935
			},
			transactions: [],
			price: '$$$$',
			location: {
				address1: '1095 Hamilton St',
				address2: '',
				address3: '',
				city: 'Vancouver',
				zip_code: 'V6B 5T4',
				country: 'CA',
				state: 'BC',
				display_address: ['1095 Hamilton St', 'Vancouver, BC V6B 5T4', 'Canada']
			},
			phone: '+16046888078',
			display_phone: '+1 604-688-8078',
			distance: 1482.328162797273,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1630',
							end: '2200',
							day: 0
						},
						{
							is_overnight: false,
							start: '1630',
							end: '2200',
							day: 1
						},
						{
							is_overnight: false,
							start: '1630',
							end: '2200',
							day: 2
						},
						{
							is_overnight: false,
							start: '1630',
							end: '2330',
							day: 3
						},
						{
							is_overnight: false,
							start: '1630',
							end: '2330',
							day: 4
						},
						{
							is_overnight: false,
							start: '1630',
							end: '2330',
							day: 5
						},
						{
							is_overnight: false,
							start: '1630',
							end: '2200',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: true
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'http://www.bluewatercafe.net/food/',
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: 'yeNenSjz_HCqngGFU5d8NQ',
			alias: 'phnom-penh-vancouver',
			name: 'Phnom Penh',
			image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/XzbN2-p09hEFJe2sT30B3g/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/phnom-penh-vancouver?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 1815,
			categories: [
				{
					alias: 'cambodian',
					title: 'Cambodian'
				},
				{
					alias: 'vietnamese',
					title: 'Vietnamese'
				}
			],
			rating: 4.2,
			coordinates: {
				latitude: 49.278431,
				longitude: -123.098205
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '244 E Georgia Street',
				address2: '',
				address3: '',
				city: 'Vancouver',
				zip_code: 'V6A 1Z7',
				country: 'CA',
				state: 'BC',
				display_address: ['244 E Georgia Street', 'Vancouver, BC V6A 1Z7', 'Canada']
			},
			phone: '+16046825777',
			display_phone: '+1 604-682-5777',
			distance: 2132.7250951450683,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1100',
							end: '2000',
							day: 0
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2000',
							day: 2
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2000',
							day: 3
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2100',
							day: 4
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2100',
							day: 5
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2100',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: false
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: null,
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: 'VPqWLp9kMiZEbctCebIZUA',
			alias: 'medina-cafe-vancouver',
			name: 'Medina Cafe',
			image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/lnRDp4KU_p1ldlLm_--a7w/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/medina-cafe-vancouver?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 2741,
			categories: [
				{
					alias: 'breakfast_brunch',
					title: 'Breakfast & Brunch'
				},
				{
					alias: 'mideastern',
					title: 'Middle Eastern'
				},
				{
					alias: 'wine_bars',
					title: 'Wine Bars'
				}
			],
			rating: 4.2,
			coordinates: {
				latitude: 49.2804429972571,
				longitude: -123.117036269849
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '780 Richards Street',
				address2: '',
				address3: '',
				city: 'Vancouver',
				zip_code: 'V6B 3A4',
				country: 'CA',
				state: 'BC',
				display_address: ['780 Richards Street', 'Vancouver, BC V6B 3A4', 'Canada']
			},
			phone: '+16048793114',
			display_phone: '+1 604-879-3114',
			distance: 1909.5584355163853,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '0800',
							end: '1500',
							day: 0
						},
						{
							is_overnight: false,
							start: '0800',
							end: '1500',
							day: 1
						},
						{
							is_overnight: false,
							start: '0800',
							end: '1500',
							day: 2
						},
						{
							is_overnight: false,
							start: '0800',
							end: '1500',
							day: 3
						},
						{
							is_overnight: false,
							start: '0800',
							end: '1500',
							day: 4
						},
						{
							is_overnight: false,
							start: '0900',
							end: '1500',
							day: 5
						},
						{
							is_overnight: false,
							start: '0900',
							end: '1500',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: false
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: '',
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: 'LjdbthVdtLYKSi7iVAFl0g',
			alias: 'jam-cafe-on-beatty-vancouver',
			name: 'Jam Cafe on Beatty',
			image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/1VCRutsqx_jR2HUqMDafDA/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/jam-cafe-on-beatty-vancouver?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 1490,
			categories: [
				{
					alias: 'breakfast_brunch',
					title: 'Breakfast & Brunch'
				}
			],
			rating: 4.4,
			coordinates: {
				latitude: 49.2802586,
				longitude: -123.1096376
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '556 Beatty Street',
				address2: '',
				address3: '',
				city: 'Vancouver',
				zip_code: 'V6B 2L3',
				country: 'CA',
				state: 'BC',
				display_address: ['556 Beatty Street', 'Vancouver, BC V6B 2L3', 'Canada']
			},
			phone: '+17783791992',
			display_phone: '+1 778-379-1992',
			distance: 1946.7376761407324,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '0800',
							end: '1500',
							day: 0
						},
						{
							is_overnight: false,
							start: '0800',
							end: '1500',
							day: 1
						},
						{
							is_overnight: false,
							start: '0800',
							end: '1500',
							day: 2
						},
						{
							is_overnight: false,
							start: '0800',
							end: '1500',
							day: 3
						},
						{
							is_overnight: false,
							start: '0800',
							end: '1500',
							day: 4
						},
						{
							is_overnight: false,
							start: '0800',
							end: '1500',
							day: 5
						},
						{
							is_overnight: false,
							start: '0800',
							end: '1500',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: false
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'http://jamcafes.com/vancouver/menu/',
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: 'Ufhxnrt_OJu4jHfVTP3aRQ',
			alias: 'fanny-bay-oyster-bar-and-shellfish-market-vancouver',
			name: 'Fanny Bay Oyster Bar & Shellfish Market',
			image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/Qh9mkTecj35trmXhiRSHgw/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/fanny-bay-oyster-bar-and-shellfish-market-vancouver?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 903,
			categories: [
				{
					alias: 'seafood',
					title: 'Seafood'
				},
				{
					alias: 'seafoodmarkets',
					title: 'Seafood Markets'
				}
			],
			rating: 4.4,
			coordinates: {
				latitude: 49.2787525,
				longitude: -123.1138689
			},
			transactions: [],
			price: '$$$',
			location: {
				address1: '762 Cambie St',
				address2: '',
				address3: null,
				city: 'Vancouver',
				zip_code: 'V6B 2P2',
				country: 'CA',
				state: 'BC',
				display_address: ['762 Cambie St', 'Vancouver, BC V6B 2P2', 'Canada']
			},
			phone: '+17783799510',
			display_phone: '+1 778-379-9510',
			distance: 1711.527841072457,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1400',
							end: '2200',
							day: 0
						},
						{
							is_overnight: false,
							start: '1400',
							end: '2200',
							day: 1
						},
						{
							is_overnight: false,
							start: '1400',
							end: '2200',
							day: 2
						},
						{
							is_overnight: false,
							start: '1400',
							end: '2200',
							day: 3
						},
						{
							is_overnight: false,
							start: '1400',
							end: '2200',
							day: 4
						},
						{
							is_overnight: false,
							start: '1400',
							end: '2200',
							day: 5
						},
						{
							is_overnight: false,
							start: '1400',
							end: '2200',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: false
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'http://fannybayoysters.com/uploads/pdf/fbobmenu2024website.pdf',
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: 'NdEPf2Ls5Ql3_nkwjqKvXA',
			alias: 'the-flying-pig-vancouver-5',
			name: 'The Flying Pig',
			image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/BvnEI9u2Lvwil5zycg5DpA/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/the-flying-pig-vancouver-5?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 1392,
			categories: [
				{
					alias: 'newcanadian',
					title: 'Canadian (New)'
				},
				{
					alias: 'seafood',
					title: 'Seafood'
				}
			],
			rating: 4,
			coordinates: {
				latitude: 49.27501,
				longitude: -123.122
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '1168 Hamilton Street',
				address2: 'Unit 104',
				address3: '',
				city: 'Vancouver',
				zip_code: 'V6B 2S2',
				country: 'CA',
				state: 'BC',
				display_address: ['1168 Hamilton Street', 'Unit 104', 'Vancouver, BC V6B 2S2', 'Canada']
			},
			phone: '+16045681344',
			display_phone: '+1 604-568-1344',
			distance: 1374.0667516424435,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1500',
							end: '0000',
							day: 0
						},
						{
							is_overnight: false,
							start: '1500',
							end: '0000',
							day: 1
						},
						{
							is_overnight: false,
							start: '1500',
							end: '0000',
							day: 2
						},
						{
							is_overnight: false,
							start: '1500',
							end: '0000',
							day: 3
						},
						{
							is_overnight: false,
							start: '1200',
							end: '0000',
							day: 4
						},
						{
							is_overnight: false,
							start: '1200',
							end: '0000',
							day: 5
						},
						{
							is_overnight: false,
							start: '1200',
							end: '2200',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: true
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'https://theflyingpigvan.com/menu/',
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: 'QmkGDL-8zexdKV3Xcn8ZYg',
			alias: 'oeb-breakfast-co-yaletown-vancouver-3',
			name: 'OEB Breakfast Co. - Yaletown',
			image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/B-MxxZfzVpBu8XGEQBGxDg/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/oeb-breakfast-co-yaletown-vancouver-3?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 942,
			categories: [
				{
					alias: 'breakfast_brunch',
					title: 'Breakfast & Brunch'
				}
			],
			rating: 4.3,
			coordinates: {
				latitude: 49.27348,
				longitude: -123.119278
			},
			transactions: ['restaurant_reservation'],
			price: '$$',
			location: {
				address1: '1137 Marinaside Crescent',
				address2: null,
				address3: '',
				city: 'Vancouver',
				zip_code: 'V6Z 2Y3',
				country: 'CA',
				state: 'BC',
				display_address: ['1137 Marinaside Crescent', 'Vancouver, BC V6Z 2Y3', 'Canada']
			},
			phone: '+16044233447',
			display_phone: '+1 604-423-3447',
			distance: 1153.068003234908,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '0700',
							end: '1500',
							day: 0
						},
						{
							is_overnight: false,
							start: '0700',
							end: '1500',
							day: 1
						},
						{
							is_overnight: false,
							start: '0700',
							end: '1500',
							day: 2
						},
						{
							is_overnight: false,
							start: '0700',
							end: '1500',
							day: 3
						},
						{
							is_overnight: false,
							start: '0700',
							end: '1500',
							day: 4
						},
						{
							is_overnight: false,
							start: '0700',
							end: '1500',
							day: 5
						},
						{
							is_overnight: false,
							start: '0700',
							end: '1500',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: false
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'https://eatoeb.com/menu/vancouver/',
				open24_hours: null,
				waitlist_reservation: true
			}
		},
		{
			id: 'wHTXCWVsx2PYPT21JV-HeQ',
			alias: 'lupo-vancouver',
			name: 'Lupo',
			image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/HpmpVUByj3sfFo0OCQ_Iyw/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/lupo-vancouver?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 475,
			categories: [
				{
					alias: 'italian',
					title: 'Italian'
				}
			],
			rating: 4.3,
			coordinates: {
				latitude: 49.278222058049096,
				longitude: -123.11735347768747
			},
			transactions: [],
			price: '$$$',
			location: {
				address1: '869 Hamilton Street',
				address2: '',
				address3: '',
				city: 'Vancouver',
				zip_code: 'V6B 2R7',
				country: 'CA',
				state: 'BC',
				display_address: ['869 Hamilton Street', 'Vancouver, BC V6B 2R7', 'Canada']
			},
			phone: '+16045692535',
			display_phone: '+1 604-569-2535',
			distance: 1663.708437652385,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 1
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 2
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 3
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 4
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 5
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: false
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'http://www.luporestaurant.ca/menu.html',
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: 'XAH2HpuUUtu7CUO26pbs4w',
			alias: 'saku-vancouver-8',
			name: 'Saku',
			image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/RJV1GXwxPCbfeB6pKfvV9w/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/saku-vancouver-8?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 269,
			categories: [
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'noodles',
					title: 'Noodles'
				},
				{
					alias: 'seafood',
					title: 'Seafood'
				}
			],
			rating: 4.3,
			coordinates: {
				latitude: 49.2631006,
				longitude: -123.11667523250104
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '548 W Broadway',
				address2: '',
				address3: null,
				city: 'Vancouver',
				zip_code: 'V5Z 1E9',
				country: 'CA',
				state: 'BC',
				display_address: ['548 W Broadway', 'Vancouver, BC V5Z 1E9', 'Canada']
			},
			phone: '+16044234600',
			display_phone: '+1 604-423-4600',
			distance: 38.09212796609981,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1100',
							end: '1500',
							day: 0
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2100',
							day: 0
						},
						{
							is_overnight: false,
							start: '1100',
							end: '1500',
							day: 1
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2100',
							day: 1
						},
						{
							is_overnight: false,
							start: '1100',
							end: '1500',
							day: 2
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2100',
							day: 2
						},
						{
							is_overnight: false,
							start: '1100',
							end: '1500',
							day: 3
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2100',
							day: 3
						},
						{
							is_overnight: false,
							start: '1100',
							end: '1500',
							day: 4
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2100',
							day: 4
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2100',
							day: 5
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2100',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: false
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'https://www.sakuvancouver.com/menus',
				open24_hours: null,
				waitlist_reservation: true
			}
		},
		{
			id: '5-adl2zPRMgammVOoz5WEg',
			alias: 'published-on-main-vancouver-2',
			name: 'Published On Main',
			image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/GRZGQGwjX3d46TF11pSDvQ/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/published-on-main-vancouver-2?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 161,
			categories: [
				{
					alias: 'tapasmallplates',
					title: 'Tapas/Small Plates'
				},
				{
					alias: 'wine_bars',
					title: 'Wine Bars'
				},
				{
					alias: 'cocktailbars',
					title: 'Cocktail Bars'
				}
			],
			rating: 4.3,
			coordinates: {
				latitude: 49.25283186017385,
				longitude: -123.10116032897228
			},
			transactions: [],
			location: {
				address1: '3593 Main Street',
				address2: '',
				address3: null,
				city: 'Vancouver',
				zip_code: 'V5V 3N4',
				country: 'CA',
				state: 'BC',
				display_address: ['3593 Main Street', 'Vancouver, BC V5V 3N4', 'Canada']
			},
			phone: '+16044234840',
			display_phone: '+1 604-423-4840',
			distance: 1595.1956392439774,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1700',
							end: '2300',
							day: 0
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2300',
							day: 1
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2300',
							day: 2
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2300',
							day: 3
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2300',
							day: 4
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2300',
							day: 5
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2300',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: true
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'https://publishedonmain.com/menu/',
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: 'p5thThuUITUjAy8gS3sPMw',
			alias: 'fable-kitchen-vancouver-2',
			name: 'Fable Kitchen',
			image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/mIfjavZhuvotp9enRH7hUA/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/fable-kitchen-vancouver-2?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 804,
			categories: [
				{
					alias: 'newcanadian',
					title: 'Canadian (New)'
				}
			],
			rating: 4.3,
			coordinates: {
				latitude: 49.2679331,
				longitude: -123.149019
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '1944 W 4th Avenue',
				address2: '',
				address3: '',
				city: 'Vancouver',
				zip_code: 'V6J 1M5',
				country: 'CA',
				state: 'BC',
				display_address: ['1944 W 4th Avenue', 'Vancouver, BC V6J 1M5', 'Canada']
			},
			phone: '+16047321322',
			display_phone: '+1 604-732-1322',
			distance: 2435.1131842867535,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1100',
							end: '1400',
							day: 0
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 0
						},
						{
							is_overnight: false,
							start: '1100',
							end: '1400',
							day: 1
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 1
						},
						{
							is_overnight: false,
							start: '1100',
							end: '1400',
							day: 2
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 2
						},
						{
							is_overnight: false,
							start: '1100',
							end: '1400',
							day: 3
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 3
						},
						{
							is_overnight: false,
							start: '1100',
							end: '1400',
							day: 4
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 4
						},
						{
							is_overnight: false,
							start: '0900',
							end: '1400',
							day: 5
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 5
						},
						{
							is_overnight: false,
							start: '0900',
							end: '1400',
							day: 6
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: false
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'http://qrco.de/fabledinner',
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: '_4R46MNkwx9MeOyt0YfNxA',
			alias: 'chambar-vancouver',
			name: 'Chambar',
			image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/62vFSZ-g2eAJwEb-oxm5Vw/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/chambar-vancouver?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 1630,
			categories: [
				{
					alias: 'belgian',
					title: 'Belgian'
				}
			],
			rating: 4.2,
			coordinates: {
				latitude: 49.2801460007961,
				longitude: -123.109925328073
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '568 Beatty Street',
				address2: '',
				address3: '',
				city: 'Vancouver',
				zip_code: 'V6B 2L3',
				country: 'CA',
				state: 'BC',
				display_address: ['568 Beatty Street', 'Vancouver, BC V6B 2L3', 'Canada']
			},
			phone: '+16048797119',
			display_phone: '+1 604-879-7119',
			distance: 1930.5337011764295,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 0
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 1
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 2
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 3
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 4
						},
						{
							is_overnight: false,
							start: '0900',
							end: '1500',
							day: 5
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 5
						},
						{
							is_overnight: false,
							start: '0900',
							end: '1500',
							day: 6
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: false
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'http://www.chambar.com/menu/',
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: 'iid0VenH7rIp3AWuyQAAHw',
			alias: 'saku-vancouver-9',
			name: 'Saku',
			image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/52BjyHaVTu9ebP0cBqgEQg/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/saku-vancouver-9?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 464,
			categories: [
				{
					alias: 'japanese',
					title: 'Japanese'
				}
			],
			rating: 4.4,
			coordinates: {
				latitude: 49.289223,
				longitude: -123.132266
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '1588 Robson Street',
				address2: '',
				address3: null,
				city: 'Vancouver',
				zip_code: 'V6G 2G5',
				country: 'CA',
				state: 'BC',
				display_address: ['1588 Robson Street', 'Vancouver, BC V6G 2G5', 'Canada']
			},
			phone: '+17783795872',
			display_phone: '+1 778-379-5872',
			distance: 3114.450620447228,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1130',
							end: '1500',
							day: 0
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2130',
							day: 0
						},
						{
							is_overnight: false,
							start: '1130',
							end: '1500',
							day: 1
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2130',
							day: 1
						},
						{
							is_overnight: false,
							start: '1130',
							end: '1500',
							day: 2
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2130',
							day: 2
						},
						{
							is_overnight: false,
							start: '1130',
							end: '1500',
							day: 3
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2130',
							day: 3
						},
						{
							is_overnight: false,
							start: '1130',
							end: '2130',
							day: 4
						},
						{
							is_overnight: false,
							start: '1130',
							end: '2130',
							day: 5
						},
						{
							is_overnight: false,
							start: '1130',
							end: '2130',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: false
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'https://www.sakuvancouver.com/menus',
				open24_hours: null,
				waitlist_reservation: true
			}
		},
		{
			id: 'l184Y1d3oAa5_Al4YIaRjQ',
			alias: 'anh-and-chi-vancouver',
			name: 'Anh and Chi',
			image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/pMvur_cjBwQ3nz1ye5PJeQ/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/anh-and-chi-vancouver?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 728,
			categories: [
				{
					alias: 'vietnamese',
					title: 'Vietnamese'
				},
				{
					alias: 'cocktailbars',
					title: 'Cocktail Bars'
				}
			],
			rating: 4,
			coordinates: {
				latitude: 49.2550314422938,
				longitude: -123.100882202153
			},
			transactions: [],
			price: '$$$',
			location: {
				address1: '3388 Main Street',
				address2: null,
				address3: '',
				city: 'Vancouver',
				zip_code: 'V5V 3M7',
				country: 'CA',
				state: 'BC',
				display_address: ['3388 Main Street', 'Vancouver, BC V5V 3M7', 'Canada']
			},
			phone: '+16048788883',
			display_phone: '+1 604-878-8883',
			distance: 1442.4854753127547,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1100',
							end: '2200',
							day: 0
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2200',
							day: 1
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2200',
							day: 2
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2200',
							day: 3
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2300',
							day: 4
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2300',
							day: 5
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2200',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: true
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'http://anhandchi.com/menu/',
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: 'nkDZY5xqihF3XtZMzzfqqg',
			alias: 'hokkaido-ramen-santouka-vancouver-5',
			name: 'Hokkaido Ramen Santouka',
			image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/9Fe-Lqjx8cng9bBCB8MiKw/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/hokkaido-ramen-santouka-vancouver-5?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 241,
			categories: [
				{
					alias: 'noodles',
					title: 'Noodles'
				},
				{
					alias: 'ramen',
					title: 'Ramen'
				},
				{
					alias: 'soup',
					title: 'Soup'
				}
			],
			rating: 4.2,
			coordinates: {
				latitude: 49.263127,
				longitude: -123.1168917
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '558 W Broadway',
				address2: '',
				address3: null,
				city: 'Vancouver',
				zip_code: 'V5Z 1E9',
				country: 'CA',
				state: 'BC',
				display_address: ['558 W Broadway', 'Vancouver, BC V5Z 1E9', 'Canada']
			},
			phone: '+16045651770',
			display_phone: '+1 604-565-1770',
			distance: 50.822267069302015,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1100',
							end: '2300',
							day: 0
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2300',
							day: 1
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2300',
							day: 2
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2300',
							day: 3
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2300',
							day: 4
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2300',
							day: 5
						},
						{
							is_overnight: false,
							start: '1100',
							end: '2300',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: true
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'https://www.santouka.co.jp/en/menu',
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: 'gV9lrbWr1CE1Jl0E58UO2g',
			alias: 'minami-vancouver',
			name: 'Minami',
			image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/e1owEuNPt6U_8JQYKQqaig/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/minami-vancouver?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 816,
			categories: [
				{
					alias: 'japanese',
					title: 'Japanese'
				},
				{
					alias: 'sushi',
					title: 'Sushi Bars'
				}
			],
			rating: 4.1,
			coordinates: {
				latitude: 49.2752733,
				longitude: -123.1207029
			},
			transactions: [],
			price: '$$$',
			location: {
				address1: '1118 Mainland Street',
				address2: '',
				address3: '',
				city: 'Vancouver',
				zip_code: 'V6B 2T9',
				country: 'CA',
				state: 'BC',
				display_address: ['1118 Mainland Street', 'Vancouver, BC V6B 2T9', 'Canada']
			},
			phone: '+16046858080',
			display_phone: '+1 604-685-8080',
			distance: 1373.6689932219708,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1200',
							end: '2130',
							day: 0
						},
						{
							is_overnight: false,
							start: '1200',
							end: '2130',
							day: 1
						},
						{
							is_overnight: false,
							start: '1200',
							end: '2130',
							day: 2
						},
						{
							is_overnight: false,
							start: '1200',
							end: '2130',
							day: 3
						},
						{
							is_overnight: false,
							start: '1200',
							end: '2200',
							day: 4
						},
						{
							is_overnight: false,
							start: '1200',
							end: '2200',
							day: 5
						},
						{
							is_overnight: false,
							start: '1200',
							end: '2130',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: false
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: 'http://minamirestaurant.com/dinner/',
				open24_hours: null,
				waitlist_reservation: null
			}
		},
		{
			id: 'htvl5L_V-zKN0UvUgP60PQ',
			alias: 'robba-da-matti-vancouver',
			name: 'Robba da Matti',
			image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/2OAP0M4yXfLkVGMfBDoUcA/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/robba-da-matti-vancouver?adjust_creative=KC1zX92uQqvUlwjapI7_vQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KC1zX92uQqvUlwjapI7_vQ',
			review_count: 540,
			categories: [
				{
					alias: 'italian',
					title: 'Italian'
				},
				{
					alias: 'tapas',
					title: 'Tapas Bars'
				}
			],
			rating: 4.2,
			coordinates: {
				latitude: 49.2753397,
				longitude: -123.1208967
			},
			transactions: [],
			price: '$$',
			location: {
				address1: '1127 Mainland Street',
				address2: '',
				address3: '',
				city: 'Vancouver',
				zip_code: 'V6B 5P2',
				country: 'CA',
				state: 'BC',
				display_address: ['1127 Mainland Street', 'Vancouver, BC V6B 5P2', 'Canada']
			},
			phone: '+16045581174',
			display_phone: '+1 604-558-1174',
			distance: 1383.341070598963,
			business_hours: [
				{
					open: [
						{
							is_overnight: false,
							start: '1130',
							end: '1500',
							day: 0
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2100',
							day: 0
						},
						{
							is_overnight: false,
							start: '1130',
							end: '1500',
							day: 1
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2100',
							day: 1
						},
						{
							is_overnight: false,
							start: '1130',
							end: '1500',
							day: 2
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2100',
							day: 2
						},
						{
							is_overnight: false,
							start: '1130',
							end: '1500',
							day: 3
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2100',
							day: 3
						},
						{
							is_overnight: false,
							start: '1130',
							end: '1500',
							day: 4
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 4
						},
						{
							is_overnight: false,
							start: '1130',
							end: '1500',
							day: 5
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2200',
							day: 5
						},
						{
							is_overnight: false,
							start: '1130',
							end: '1500',
							day: 6
						},
						{
							is_overnight: false,
							start: '1700',
							end: '2100',
							day: 6
						}
					],
					hours_type: 'REGULAR',
					is_open_now: false
				}
			],
			attributes: {
				business_temp_closed: null,
				menu_url: null,
				open24_hours: null,
				waitlist_reservation: null
			}
		}
	];
	const data = { businesses, offset: Number(offset) + limit };

	return { businesses: data.businesses, offset: data.offset };
}
