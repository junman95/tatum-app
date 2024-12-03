import { Button, Dialog } from '@radix-ui/themes';

type Props = {
  label: string;
  children: React.ReactNode;
};

const CreationDialog = ({ label, children }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Title />
      <Dialog.Trigger>
        <Button size="3">{label}</Button>
      </Dialog.Trigger>
      <Dialog.Content>{children}</Dialog.Content>
    </Dialog.Root>
  );
};

export default CreationDialog;
