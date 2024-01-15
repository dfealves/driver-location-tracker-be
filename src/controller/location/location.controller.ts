import { Body, Controller, Post } from "@nestjs/common";
import { ObjectId } from "mongodb";
import { LocationService } from "src/service/location/location.service";

@Controller('location')
export class LocationController {
    constructor(private readonly locationService: LocationService) { }

    @Post()
    async createLocation(@Body() data: { latitude: number, longitude: number, userId: string }) {
        console.log('entrei no componente de POST controller')
        const userId = new ObjectId().toHexString();
        try {
            await this.locationService.createLocation(data.latitude, data.longitude, userId);
            return {
                success: true, message: 'Localização Registrada com sucesso!'
            }
        } catch (error) {
            console.error('Houve um erro ao registrar a localização', error)
            return {
                success: false, message: 'Houve um erro ao registrar a localização'
            }
        }
    }
}