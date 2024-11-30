import { Box, Flex, Heading } from '@radix-ui/themes';
import Image from 'next/image';

type Props = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
};

const IconTitle = ({ image, title }: Props) => {
  return (
    <Box width="100%">
      <Flex gap={'2'} align={'center'}>
        <div className="bg-blue-500 rounded p-1">
          <Image src={image.src} alt={image.alt} width={14} height={14} />
        </div>
        <Heading as="h1" size="6">
          {title}
        </Heading>
      </Flex>
    </Box>
  );
};

export default IconTitle;
