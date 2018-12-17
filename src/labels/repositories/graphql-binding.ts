import { common } from '../common'
import { reduceAreas } from '../../utils'
import { RepositoryConfig } from 'label-sync-core/dist/labels'

const areas: string[] = []

export const graphqlBinding: RepositoryConfig = {
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: true,
}
