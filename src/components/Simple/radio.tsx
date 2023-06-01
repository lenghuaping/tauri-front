import type { RadioProps } from 'antd';
import { Radio } from 'antd';
import { FC, Key } from 'react'

interface ISimpleRadio extends RadioProps {
	maps: Map<string | number | boolean, string>;
}

const SimpleRadio: FC<ISimpleRadio> = (props) => {
	const { maps, ...rest } = props
	return (
		<Radio.Group  {...rest}>
			{
				Array.from(maps).map(item =>
					<Radio key={item[0] as Key} value={item[0]}>{item[1]}</Radio>)
			}
		</Radio.Group>
	)
}
export default SimpleRadio
