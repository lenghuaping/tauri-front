import type { SelectProps } from 'antd';
import { Select, } from 'antd';
import { FC, Key } from 'react'

interface ISimpleSelect extends SelectProps {
	maps: Map<string | number | boolean, string>;
}

const SimpleSelect: FC<ISimpleSelect> = (props) => {
	const { maps, ...rest } = props
	return (
		<Select placeholder="请选择" {...rest}>
			{
				Array.from(maps).map(item =>
					<Select.Option key={item[0] as Key} value={item[0]}>{item[1]}</Select.Option>)
			}
		</Select>
	)
}
export default SimpleSelect
