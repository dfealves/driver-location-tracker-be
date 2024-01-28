import { Body, Controller, Param, Patch } from "@nestjs/common";
import { LocationService } from "src/service/location/location.service";

@Controller('update')
export class UpdateLocationController {
    constructor(private readonly service: LocationService) { }

    @Patch('location/:userId')
    async updateLocation(
        @Param('userId') userId: string,
        @Body() data: { latitude: number, longitude: number }
    ) {
        try {
            await this.service.updateLocation(userId,
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