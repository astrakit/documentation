---
description: Return a user's public profile
sidebar_position: 9999
sidebar_label: /getprofile
---
# /getprofile
This endpoint returns a user's public profile information.

## Endpoint Details

| Property | Value |
| -------- | ----- |
| **URL** | `/getprofile` |
| **Method** | `GET` |
| **Authentication** | None |
| **Description** | Retrieves the public profile information for a user |

## Request Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| `target_uuid` | string | Yes | The unique identifier of the user you want to view |
| `viewer_uuid` | string | No | The unique identifier of your user (friends true or false) |

## Response Format

| Field | Type | Description |
| ----- | ---- | ----------- |
| `username` | string | The user's display name |
| `uuid` | string | The unique identifier of the user |
| `profilepicture` | string | URL to the user's profile picture |
| `profilebanner` | string | URL to the user's profile banner image |
| `profilemusic` | string | URL to the user's profile music file |
| `bio` | string | User's biography or description |
| `user_status` | string | Current status message set by the user |
| `join_date` | string | Date when the user joined the platform |
| `last_active` | string | When the user was last active on the platform |
| `astrabit_balance` | number | User's current Astrabit balance |
| `item_count` | number | Number of items the user has |
| `friends` | array | List of the user's friends with details |
| `friend_requests` | array | List of pending friend requests |
| `pending_friends` | array | List of sent friend requests |
| `profile_items` | array | List of profile items with content, icon and title |
| `handler` | string | The handler that processed the request |
| `message` | string | Description of the request result |
| `status` | string | Overall status of the request (success/error) |
| `title` | string | Title of the response |

## Example Request

```http
GET /getprofile?target_uuid=12345&viewer_uuid=12345
```

## Example Response

```json
{
    "handler": "getPublicProfile",
    "message": "Profile retrieved successfully",
    "profile": {
        "astrabit_balance": 1935,
        "bio": "Literally just coding all the time... meow meow meow meow ",
        "friend_requests": [
            {
                "added_time": "April 11, 2025 17:10:08",
                "profilepicture": "https://access.cdn.astrakit.cc/profiles-cdn/pfp-8db4a818-06c7-4e22-8629-065622358082.jpg",
                "username": "femboy",
                "uuid": "8db4a818-06c7-4e22-8629-065622358082"
            }
        ],
        "friends": [
            {
                "added_time": "April 5, 2025 15:33:20",
                "profilepicture": "https://access.cdn.astrakit.cc/profiles-cdn/pfp-e6b2d4f8-22d9-4ace-a84c-2de087df1e54.jpg",
                "username": "catpawzz",
                "uuid": "e6b2d4f8-22d9-4ace-a84c-2de087df1e54"
            }
        ],
        "item_count": 6,
        "join_date": "30/03/2025",
        "last_active": "Active 1 hour ago",
        "pending_friends": [],
        "profile_items": [
            {
                "content": "https://astrakit.cc",
                "icon": "favorite",
                "title": "Our website"
            },
            {
                "content": "meow",
                "icon": "info",
                "title": "meow"
            }
        ],
        "profilebanner": "https://access.cdn.astrakit.cc/profiles-cdn/banner-c15b497a-8831-4501-9ed5-d9ba2fc7833c.png",
        "profilemusic": "https://access.cdn.astrakit.cc/creator-cdn/catpawzz/music/ac.mp3",
        "profilepicture": "https://access.cdn.astrakit.cc/profiles-cdn/pfp-c15b497a-8831-4501-9ed5-d9ba2fc7833c.jpg",
        "user_status": "meow meow nyahhhhhhhhh~",
        "username": "astrakit",
        "uuid": "c15b497a-8831-4501-9ed5-d9ba2fc7833c"
    },
    "status": "success",
    "title": "Success"
}
```