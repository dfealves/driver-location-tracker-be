import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { RouteService } from "src/service/route/route.service";

@Controller('routes')
export class RouteController {
    constructor(private readonly routeService: RouteService) { }

    @Post(':userId/create')
    async createRoute(
        @Param("userId") userId: string,
        @Body() createRouteDTO: { destination: string, owner: string }
    ): Promise<any> {
        const { destination, owner } = createRouteDTO;
        const route = await this.routeService.createRoute(userId, destination, owner);
        return route

    }

    @Get(':userId')
    async getRoutesByUserId(@Param('userId') userId: string): Promise<any[]> {
        return this.routeService.getRoutesByUserId(userId)
    }
}