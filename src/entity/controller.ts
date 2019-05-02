import { JsonController, Get, Param, Post, HttpCode, Body } from 'routing-controllers'
import { Scoreboard } from './scoreboard';

@JsonController()
export default class ScoreboardController {

    @Get('/score/:id')
    getScore(
        @Param('id') id: number
    ){
        return Scoreboard.findOne(id)
    }

    @Get('/scores')
    async allScores() {
      const score = await Scoreboard.find()
      return { score } 
    }

    @Post('/score')
    @HttpCode(201)
    createScore(
      @Body() score: Scoreboard
    ) {
      return score.save()
    }
    
}