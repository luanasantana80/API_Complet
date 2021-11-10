import Reinoanimal from 'App/Models/Reinoanimal'
import Ambientes from 'App/Models/Ambientes'
import Especies from 'App/Models/Especies'
import Dietas from 'App/Models/Dietas'
import Cores from 'App/Models/Cores'
import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'

export default class Animais extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public reino_animal_id: number

  @column()
  public cores_id: number

  @column()
  public dietas_id: number

  @column()
  public especies_id: number

  @column()
  public ambientes_id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Reinoanimal, {
    localKey: 'id',
    foreignKey: 'reino_animal_id',
  })
  public reino: BelongsTo<typeof Reinoanimal>

  @belongsTo(() => Cores, {
    localKey: 'id',
    foreignKey: 'cores_id',
  })
  public cor: BelongsTo<typeof Cores>

  @belongsTo(() => Dietas, {
    localKey: 'id',
    foreignKey: 'dietas_id',
  })
  public dieta: BelongsTo<typeof Dietas>

  @belongsTo(() => Especies, {
    localKey: 'id',
    foreignKey: 'especies_id',
  })
  public especie: BelongsTo<typeof Especies>

  @belongsTo(() => Ambientes, {
    localKey: 'id',
    foreignKey: 'ambientes_id',
  })
  public ambiente: BelongsTo<typeof Ambientes>
}
