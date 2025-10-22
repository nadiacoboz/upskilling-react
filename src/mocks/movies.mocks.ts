import type { Movie } from "../types/movie";
import { getRandomDate } from "../utils/utils.date";

export const mockMovie: Movie = {
    id: 512,
    title: 'Citizen Kane',
    description: 'This file examines the file of Kane',
    pictureURL: 'imgURL',
    releaseDate: new Date('1941-10-25')
}

export const movieList: Movie[] = [
    {
    "id": 1,
    "title": "You're Not You",
    "description": "Compact sterilizer for disinfecting small items.",
    "pictureURL": "http://dummyimage.com/177x100.png/cc0000/ffffff",
    "releaseDate": getRandomDate( new Date('2020-01-01'), new Date('2025-12-31'))
    }, {
    "id": 2,
    "title": "Shock Corridor",
    "description": "Water-resistant jacket ideal for outdoor activities, featuring a packable design.",
    "pictureURL": "http://dummyimage.com/109x100.png/5fa2dd/ffffff",
    "releaseDate": getRandomDate( new Date('2020-01-01'), new Date('2025-12-31'))
    }, {
    "id": 3,
    "title": "Badlanders, The",
    "description": "Refreshing sorbet with a zesty lemon flavor.",
    "pictureURL": "http://dummyimage.com/123x100.png/5fa2dd/ffffff",
    "releaseDate": getRandomDate( new Date('2020-01-01'), new Date('2025-12-31'))
    }, {
    "id": 4,
    "title": "The Last Round",
    "description": "Bluetooth-enabled key tracker to find lost items easily.",
    "pictureURL": "http://dummyimage.com/101x100.png/5fa2dd/ffffff",
    "releaseDate": getRandomDate( new Date('2020-01-01'), new Date('2025-12-31'))
    }, {
    "id": 5,
    "title": "Music Lovers, The",
    "description": "Nutritious blend of wild rice and quinoa, perfect as a side dish.",
    "pictureURL": "http://dummyimage.com/168x100.png/ff4444/ffffff",
    "releaseDate": getRandomDate( new Date('2020-01-01'), new Date('2025-12-31'))
    }
]