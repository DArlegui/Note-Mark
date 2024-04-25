import { ComponentProps } from 'react'
import { DeleteNoteButton } from './Button'
import NewNoteButton from './Button/NewNoteButton'

export const ActionsButtonsRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
