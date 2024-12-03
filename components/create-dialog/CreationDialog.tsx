import { Button, Dialog } from '@radix-ui/themes';

type Props = {
  children: React.ReactNode;
};

const CreationDialog = ({ children }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Title />
      <Dialog.Trigger>
        <Button>click</Button>
      </Dialog.Trigger>
      <Dialog.Content>{children}</Dialog.Content>
    </Dialog.Root>
  );
};

export default CreationDialog;
