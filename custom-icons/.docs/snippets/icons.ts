import fs from 'node:fs';
import {
    importDirectory,
    cleanupSVG,
    runSVGO,
    parseColors,
    isEmptyColor,
} from '@iconify/tools';

(async () => {
    // Import icons
    const iconSet = await importDirectory('YOUR-ICONS-DIRECTORY', {
        prefix: 'YOUR-PREFIX',
    });

    // Validate, clean up, fix palette and optimise
    iconSet.forEach((name, type) => {
        if (type !== 'icon') {
            return;
        }

        const svg = iconSet.toSVG(name);
        if (!svg) {
            // Invalid icon
            console.error(`Invalid icon: ${name}`)
            iconSet.remove(name);
            return;
        }

        // Clean up and optimise icons
        try {
            // Clean up icon code
            cleanupSVG(svg);

            // Assume icon is monotone: replace color with currentColor, add if missing
            // If icon is not monotone, remove this code
            parseColors(svg, {
                defaultColor: 'currentColor',
                callback: (attr, colorStr, color) => {
                    return !color || isEmptyColor(color)
                        ? colorStr
                        : 'currentColor';
                },
            });

            // Optimise
            runSVGO(svg);
        } catch (err) {
            // Invalid icon
            console.error(`Error parsing ${name}:`, err);
            iconSet.remove(name);
            return;
        }

        // Update icon
        iconSet.fromSVG(name, svg);
    });

    fs.writeFileSync('icons.json', JSON.stringify(iconSet.export(), null, 2))
})();