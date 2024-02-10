import { Body, Controller, Param, Patch } from "@nestjs/common";
import { LocationService } from "src/service/location/location.service";

@Controller('update')
export class UpdateLocationController {
    constructor(private readonly service: LocationService) { }

    async updateLocation(
         data: {id: string, latitude: number, longitude: number }
    ) {
        try {
            await this.service.updateLocation(data.id,
                data.latitude, data.longitude
            )
            return {
                success: true,
                message: 'Localização atualizada com sucesso!'
            };
        } catch(error) {
            console.error('Houve um erro ao aualizar a localização', error)
            return {
                success: false,
                message: 'Houve um erro ao atualizar a localização'
            };
        }
    }
}