import ActionButton, { ActionButtonProps } from '@/components/Button/ActionButton'
import { LuFileSignature } from 'react-icons/lu'

export default function NewNoteButton({ ...props }: ActionButtonProps) {
  return (
    <ActionButton {...props}>
      <LuFileSignature className="w-4 h-4 text-zin" />
    </ActionButton>
  )
}
