import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Dietas from 'App/Models/Dietas'

export default class DietasController {
  //Metodo de GET abaixo com Paginação
  public async index(ctx: HttpContextContract) {
    const page = ctx.request.input('page', 1)
    const limit = 2
    const DietasObj = await Dietas.query().paginate(page, limit)
    return ctx.response.send(DietasObj)
  }
  //Metodo de POST e PUT abaixo
  public async store(ctx: HttpContextContract) {
    const fields = ctx.request.only(['name'])
    const { id } = ctx.request.params()
    let DietasObj
    if (id) {
      DietasObj = await Dietas.query().where('id', id).update(fields)
    } else {
      DietasObj = await Dietas.create(fields)
    }

    return ctx.response.send(DietasObj)
  }
  //Metodo de DELETE abaixo
  public async destroy(ctx: HttpContextContract) {
    const { id } = ctx.request.params()
    const exclude = await Dietas.query().where('id', id).delete()

    return ctx.response.send(exclude)
  }
  //Metodo de LIST UNID abaixo
  public async getById(ctx: HttpContextContract) {
    const { id } = ctx.request.params()
    const data = await Dietas.find(id)

    return ctx.response.send(data)
  }
}
