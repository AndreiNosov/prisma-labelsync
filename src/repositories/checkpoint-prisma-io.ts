import { repo } from 'label-sync'
import { common } from '../common/prisma2'

export const checkpointPrismaIo = repo({
  config: {
    removeUnconfiguredLabels: false,
  },
  labels: [...common],
})
