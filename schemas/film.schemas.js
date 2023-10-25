export default{
    film_schema:{
        "definitions": {
        },
        "$schema": "http://json-schema.org/draft-07/schema#", 
        "$id": "https://example.com/object1697527931.json", 
        "title": "Root", 
        "type": "object",
        "additionalProperties": false,
        "required": [
            "title",
            "description",
            "language_id",
        ],
        "properties": {
            "title": {
                "$id": "#root/title", 
                "title": "Title", 
                "type": "string",
                "default": "",
                "examples": [
                    "ACADEMY DINOSAUR"
                ],
                "pattern": "^.*$"
            },
            "description": {
                "$id": "#root/description", 
                "title": "Description", 
                "type": "string",
                "default": "",
                "examples": [
                    "A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies"
                ],
                "pattern": "^.*$"
            },
            "release_year": {
                "$id": "#root/release_year", 
                "title": "Release_year", 
                "type": "integer",
                "examples": [
                    2006
                ],
                "default": null
            },
            "language_id": {
                "$id": "#root/language_id", 
                "title": "Language_id", 
                "type": "integer",
                "examples": [
                    1
                ],
                "default": 1
            },
            "original_language_id": {
                "$id": "#root/original_language_id", 
                "title": "Original_language_id", 
                "type": "null",
                "default": null
            },
            "rental_duration": {
                "$id": "#root/rental_duration", 
                "title": "Rental_duration", 
                "type": "integer",
                "examples": [
                    6
                ],
                "default": 3
            },
            "rental_rate": {
                "$id": "#root/rental_rate", 
                "title": "Rental_rate", 
                "type": "number",
                "examples": [
                    0.99
                ],
                "default": 4.99
            },
            "length": {
                "$id": "#root/length", 
                "title": "Length", 
                "type": "integer",
                "examples": [
                    86
                ],
                "default": null
            },
            "replacement_cost": {
                "$id": "#root/replacement_cost", 
                "title": "Replacement_cost", 
                "type": "number",
                "examples": [
                    20.99
                ],
                "default": 19.99
            },
            "rating": {
                "$id": "#root/rating", 
                "title": "Rating", 
                "type": "string",
                "enum": ["G", "PG", "PG-13", "R", "NC-17"],
                "default": "G",
                "examples": [
                    "PG"
                ],
                "pattern": "^.*$"
            },
            "special_features": {
                "$id": "#root/special_features",
                "title": "Special_features",
                "type": "string",
                "validate": "validateSpecialFeaturesFunction",
                "pattern": "^.*$"
            }
        }
    },
    
    film_update_schema:{
        "definitions": {},
        "$schema": "http://json-schema.org/draft-07/schema#", 
        "$id": "https://example.com/object1697527931.json", 
        "title": "Root", 
        "type": "object",
        "anyOf": [
            {
                "required":["title",
                            "description",
                            "language_id"]
            },
            {
                "required":["title",
                            "description"]
            },
            {
                "required":["title",
                            "language_id"]
            },
            {
                "required":["description",
                            "language_id"]
            },
            {
                "required":["description"]
            },
            {
                "required":["title"]
            },
            {
                "required":["language_id"]
            },
        ],
        "properties": {
            "title": {
                "$id": "#root/title", 
                "title": "Title", 
                "type": "string",
                "default": "",
                "examples": [
                    "ACADEMY DINOSAUR"
                ],
                "pattern": "^.*$"
            },
            "description": {
                "$id": "#root/description", 
                "title": "Description", 
                "type": "string",
                "default": "",
                "examples": [
                    "A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies"
                ],
                "pattern": "^.*$"
            },
            "release_year": {
                "$id": "#root/release_year", 
                "title": "Release_year", 
                "type": "integer",
                "examples": [
                    2006
                ],
                "default": null
            },
            "language_id": {
                "$id": "#root/language_id", 
                "title": "Language_id", 
                "type": "integer",
                "examples": [
                    1
                ],
                "default": 1
            },
            "original_language_id": {
                "$id": "#root/original_language_id", 
                "title": "Original_language_id", 
                "type": "null",
                "default": null
            },
            "rental_duration": {
                "$id": "#root/rental_duration", 
                "title": "Rental_duration", 
                "type": "integer",
                "examples": [
                    6
                ],
                "default": 3
            },
            "rental_rate": {
                "$id": "#root/rental_rate", 
                "title": "Rental_rate", 
                "type": "number",
                "examples": [
                    0.99
                ],
                "default": 4.99
            },
            "length": {
                "$id": "#root/length", 
                "title": "Length", 
                "type": "integer",
                "examples": [
                    86
                ],
                "default": null
            },
            "replacement_cost": {
                "$id": "#root/replacement_cost", 
                "title": "Replacement_cost", 
                "type": "number",
                "examples": [
                    20.99
                ],
                "default": 19.99
            },
            "rating": {
                "$id": "#root/rating", 
                "title": "Rating", 
                "type": "string",
                "enum": ["G", "PG", "PG-13", "R", "NC-17"],
                "default": "G",
                "examples": [
                    "PG"
                ],
                "pattern": "^.*$"
            },
            "special_features": {
                "$id": "#root/special_features",
                "title": "Special_features",
                "type": "string",
                "pattern": "^(Trailers|Commentaries|Deleted Scenes|Behind the Scenes)(,\\s*Trailers|,\\s*Commentaries|,\\s*Deleted Scenes|,\\s*Behind the Scenes)*$"
            }
        },
        "additionalProperties":false
    }
}