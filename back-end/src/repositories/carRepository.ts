import { prisma } from "../database/client"
import type { CreateCarDto } from "../dto/car/createCarDto"
import type { UpdateCarDto} from "../dto/car/updateCarDto"
export function create(data: CreateCarDto){
    return prisma.car.create({
        data,
    });
}

export function findById(id: number){
    return prisma.car.findUnique({
        where: {id},
    });
}

export function findAll(){
    return prisma.car.findMany({
        orderBy: {
            brand: "asc",
        },
    });
}

export function update(
    id: number,
    data: UpdateCarDto
){
    return prisma.car.update({
        where: { id },
        data,
    });
}


export function deleteById(id: number){
    return prisma.car.delete({
        where: { id },
    });
}

