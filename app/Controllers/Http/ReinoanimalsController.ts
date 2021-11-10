import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Reinoanimal from 'App/Models/Reinoanimal'

export default class ReinoanimalsController {
  //Metodo de GET abaixo com Paginação
  public async index(ctx: HttpContextContract) {
    const page = ctx.request.input('page', 1)
    const limit = 2
    const ReinoAnimalObj = await Reinoanimal.query().paginate(page, limit)
    return ctx.response.send(ReinoAnimalObj)
  }
  //Metodo de POST e PUT abaixo
  public async store(ctx: HttpContextContract) {
    const fields = ctx.request.only(['name', 'description'])
    const { id } = ctx.request.params()
    let ReinoAnimalObj
    if (id) {
      ReinoAnimalObj = await Reinoanimal.query().where('id', id).update(fields)
    } else {
      ReinoAnimalObj = await Reinoanimal.create(fields)
    }

    return ctx.response.send(ReinoAnimalObj)
  }
  //Metodo de DELETE abaixo
  public async destroy(ctx: HttpContextContract) {
    const { id } = ctx.request.params()
    const exclude = await Reinoanimal.query().where('id', id).delete()

    return ctx.response.send(exclude)
  }
  //Metodo de LIST UNID abaixo
  public async getById(ctx: HttpContextContract) {
    const { id } = ctx.request.params()
    const data = await Reinoanimal.find(id)

    return ctx.response.send(data)
  }
}
