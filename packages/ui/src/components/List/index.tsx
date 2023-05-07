import type { ListProps } from '@mantine/core';
import { List as MantineList } from '@mantine/core';

export type ListItemProps = ListProps;

const List = ({ children, ...props }: ListItemProps) => {
  return <MantineList {...props}>{children}</MantineList>;
};

List.Item = MantineList.Item;

export { List };
