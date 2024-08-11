import React from 'react';
import { Flex, List, ListItem, NativeSelect, rem, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed, IconHash } from '@tabler/icons-react';
import { data, options } from './data';
import RcCascader from 'rc-cascader';
import './Cascader.css';



const Cascader = () => {
    const handleChange = (value: string[]) => {
        console.log(value);
    };

    return (
        <Flex className="custom-cascader-container">
            <RcCascader options={options} onChange={handleChange} className="custom-cascader" />
        </Flex>
    );
}

export default Cascader;
