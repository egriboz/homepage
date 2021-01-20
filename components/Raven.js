import { useColorModeValue } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/react';
import React from 'react';

export function Raven() {
  const filter = useColorModeValue('invert(0)', 'invert(1)');

  return <Image filter={filter} src="raven.gif" />;
}