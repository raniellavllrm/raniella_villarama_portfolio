import { Stack, Chip } from '@mui/material';

import Bulsutalk from "../assets/images/bulsutalk_prev.jpg";
import Archive from "../assets/images/thearchive_prev.png"

const returnChip = (chipData) => {
    const chips = chipData.map((chipData) =>
        <Stack key={chipData.key} sx={{ padding: 0, margin: 0 }}>
            <Chip
                label={chipData.label}
                size="small"
                sx={{ fontSize: 10, color: "#FFFFFF", backgroundColor: chipData.color }}
            />
        </Stack>
    )
    return chips;
}
export const projects = [
    {
        key: 1,
        source: Bulsutalk,
        link: "https://bulsutalk.netlify.app/",
        projectName: "BulsuTalk",
        category: (
            returnChip([
                {
                    key: 1,
                    label: "ReactJS",
                    color: "#7cc5d9 "
                },
                {
                    key: 2,
                    label: "Material UI",
                    color: "#757ce8"
                },
                {
                    key: 3,
                    label: "Firebase",
                    color: "#F5820D"
                }
            ])
        )
    },
    {
        key: 1,
        source: Archive,
        link: "https://github.com/raniellavllrm/thearhivelib",
        projectName: "The Archive",
        category: (
            returnChip([
                {
                    key: 1,
                    label: "Java",
                    color: "#5382a1"
                }
            ])
        )
    }
]