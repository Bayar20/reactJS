import _ from 'lodash';
import React from 'react';
import {
    Handles,
    Rail,
    Slider as SliderContainer,
    Ticks,
} from 'react-compound-slider';
import { BackArrowIcon, ChevronRightIcon } from '../../assets';
import { Center, Overlay, Queue } from '../layout';
import { Border } from './border';
import { Shadow } from './shadow';
import { Text } from './text';
export const Slider = ({ max = 10, onChange, onUpdate }) => {
    const renderThumb = (handlesObject) => (
        <div>
            {handlesObject.handles.map((handle) => (
                <div
                    style={{
                        position: 'absolute',
                        top: '-15px',
                        left: `${handle.percent - 4.5}%`,
                    }}
                >
                    <Shadow interactive={true}>
                        <Border
                            {...handlesObject.getHandleProps(handle.id)}
                            radius="circle"
                            role="secondary"
                            backgroundRole="light"
                            borderSize={[1]}
                            animationDelay={0.2}
                            height={6}
                            width={6}
                        >
                            <Center height="100%">
                                <BackArrowIcon height={20} width={20} />
                                <ChevronRightIcon height={20} width={20} />
                            </Center>
                        </Border>
                    </Shadow>
                </div>
            ))}
        </div>
    );
    const renderTicks = (ticksObject) => (
        <>
            {ticksObject.ticks.map((tick) => (
                <Overlay key={tick.id} top={0} left={`${tick.percent}%`}>
                    <Border
                        style={{
                            left: `${tick.percent}%`,
                        }}
                        radius="small"
                        borderSize={[0]}
                        backgroundRole="info"
                    />
                </Overlay>
            ))}
        </>
    );
    const renderRail = (railObject) => (
        <Border
            borderSize={[1]}
            role="info"
            width="100%"
            height={1}
            backgroundRole="tertiary2"
        />
    );
    const tickValues = _.range(1, max);

    return (
        <SliderContainer
            rootStyle={{ position: 'relative' }}
            onUpdate={_.debounce(onUpdate, 10)}
            onChange={onChange}
            mode={1}
            step={1}
            domain={[0, max]}
            values={[4]}
        >
            <Overlay top={-8} width="100%">
                <Queue justifyContent="space-between" width="100%">
                    <Text type="heading3">0</Text>
                    <Text type="heading3">{max}</Text>
                </Queue>
            </Overlay>
            <Rail>{renderRail}</Rail>
            <Ticks values={tickValues}>{renderTicks}</Ticks>
            <Handles>{renderThumb}</Handles>
        </SliderContainer>
    );
};
