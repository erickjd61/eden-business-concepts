import type { saveSnapshot as ServerSave } from './snapshot-save'

type Root = 'R' | 'V' | 'A'

export function saveSnapshot(payload: {
  firstName: string; lastInitial: string; teamCode: string; answers: Root[]; viewedFaith: boolean
}): Promise<unknown> {
  return import('./snapshot-save').then((m: { saveSnapshot: typeof ServerSave }) =>
    m.saveSnapshot({ data: payload }),
  )
}