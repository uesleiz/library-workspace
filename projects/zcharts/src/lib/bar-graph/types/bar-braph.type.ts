export type BarGraphType = 'Basic' | 'Axis' | 'BarBackground';

type axisLabel = {
    show: boolean,
};
type axisLine = {
    show: boolean,
    onZero: boolean
}
type axisTick = {
    show: boolean,
    inside: false,
    falselength: number
}
type axisPointer = {
    show: boolean,
}
type splitLine = {
    show: false,
    lineStyle: {
        color: string[],
        width: number,
        type: 'solid'
    }
};

export type serieLabel = {
    show: boolean,
    splitLine: splitLine,
    axisLine: axisLine,
    axisTick: axisTick,
}
export type categoryLabel = {
    axisLabel: axisLabel,
    axisLine: axisLine,
    axisTick: axisTick,
    axisPointer: axisPointer
}

export type SeriesData = {
    value: number;
    itemStyle?: { color?: string }
};
export type CategoryData = string[]

export type BarGraphData = {
    value: number,
    name: string,
    itemStyle: { color: string }
}[]
