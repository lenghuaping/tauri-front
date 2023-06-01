import { CopyIcon } from '@chakra-ui/icons';
import { Box, useToast } from '@chakra-ui/react';

import { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './index.less';

interface ICopy {
  text: string;
  onCopy?: () => void;
}

const Copy: FC<ICopy> = (props) => {
  const { text, onCopy } = props;

  const toast = useToast();

  const handleCopy = () => {
    toast({
      position: 'top',
      duration: 3000,
      description: '复制成功',
      status: 'success',
    });
    onCopy?.();
  };

  return (
    <Box className="uniubi-tool-copy">
      <Box className="uniubi-tool-copy-text">{text}</Box>
      <CopyToClipboard text={text} onCopy={handleCopy}>
        <CopyIcon color="green.200" cursor="pointer" />
      </CopyToClipboard>
    </Box>
  );
};

export default Copy;
