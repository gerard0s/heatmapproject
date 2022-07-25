export class HSLColorRange {
    private lowest: number;
    private highest: number;

    constructor(low: number, higth: number) {
        this.lowest = low;
        this.highest = higth;
    }

    getBackgroundColor(value): string {
        const percentage = this.getIntensityPercentage(value);
        const saturationPercentage = 100 - percentage; // 100 - darker color, 0 - lighter color
        const ligthnessPercentage =  100 - percentage; // 100 - darker color, 0 - lighter color
        const bgColor = `hsl(240, ${saturationPercentage}%, ${ligthnessPercentage}%)`
        return bgColor;
    }

    getFontColor (value: number): string {
        const percentage = this.getIntensityPercentage(value);
        const ligthness = percentage < 50 ? 0 : 100; // ligther font if the background color is darker
        return `hsl(0, 100%, ${ligthness}%)`
    }

    private getIntensityPercentage(value: number): number {
        // substracting the lowest value so the lowest can be the lighter color (white) and the highest
        // values can be the darker one
        return ( (value - this.lowest ) * 100) / this.highest;
    }

}
