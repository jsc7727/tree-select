import React from 'react';
import { Flex, List, ListItem, NativeSelect, rem, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed, IconHash } from '@tabler/icons-react';
import { data, options } from './data';
import RcCascader from 'rc-cascader';
import './Cascader.css';



const Cascader = () => {

    // const [isOpen, setIsOpen] = React.useState(false);
    const handleChange = (value: string[]) => {
        console.log(value);
        // setIsOpen(false);
    };

    return (
        <RcCascader
            options={options}
            onChange={handleChange}
            showSearch
            changeOnSelect
            expandTrigger="hover" />
    );
}

export default Cascader;
