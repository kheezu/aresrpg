import { to_slot } from '../player/inventory.js'
import { PLAYER_LOOTCHEST_ID } from '../settings.js'

import { literal } from './declare_options.js'

export const lootchest_node = [
  literal({
    value: 'lootchest',
    flags: {
      has_command: true,
    },
  }),
]
const invType = 5
const invId = PLAYER_LOOTCHEST_ID

export default function lootchest({ sender, get_state}) {
    sender.write('open_window', {
      windowId: invId,
      inventoryType: invType,
      windowTitle: JSON.stringify({
        text: `Lootchest`,
      }),
    })
}
