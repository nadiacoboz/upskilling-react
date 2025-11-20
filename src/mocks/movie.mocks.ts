import type { Movie } from "../types/movie";

export const mockMovie: Movie = {
    id: 1,
    title: 'Citizen Kane',
    descripcion: 'This film examines the life of Kane',
    pictureUrl: 'imageURL',
    releaseDate: new Date('1941-10-25')
}