import { Controller, Get, Param } from "@nestjs/common";
import { RouteService } from "src/service/route/route.service";

@Controller('routes')
export class RouteController {
    constructor(private readonly routeService: RouteService) { }

    @Get(':userId')
    async getRoutesByUserId(@Param('userId') userId: string): Promise<any[]> {
        return this.routeService.getRoutesByUserId(userId)
    }
}