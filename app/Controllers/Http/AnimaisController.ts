import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Animais from 'App/Models/Animais'

export default class AnimaisController {
  //Metodo de GET abaixo com Paginação
  public async index(ctx: HttpContextContract) {
    const page = ctx.request.input('page', 1)
    const limit = 2
    const AnimaisObj = await Animais.query()
      .preload('reino')
      .preload('cor')
      .preload('dieta')
      .preload('especie')
      .preload('ambiente')
      .paginate(page, limit)
    return ctx.response.send(AnimaisObj)
  }
  //Metodo de POST e PUT abaixo
  public async store(ctx: HttpContextContract) {
    const fields = ctx.request.only(['name'])
    const { id } = ctx.request.params()
    let AnimaisObj
    if (id) {
      AnimaisObj = await Animais.query().where('id', id).update(fields)
    } else {
      AnimaisObj = await Animais.create(fields)
    }

    return ctx.response.send(AnimaisObj)
  }
  //Metodo de DELETE abaixo
  public async destroy(ctx: HttpContextContract) {
    const { id } = ctx.request.params()
    const exclude = await Animais.query().where('id', id).delete()

    return ctx.response.send(exclude)
  }
  //Metodo de LIST UNID abaixo
  public async getById(ctx: HttpContextContract) {
    const { id } = ctx.request.params()
    const data = await Animais.find(id)

    return ctx.response.send(data)
  }
}
