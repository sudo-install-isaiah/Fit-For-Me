import React from "react";
import { Box } from "@mui/material/";
import {
	displayTemplateOne,
	displayTemplateTwo,
	displayTemplateThree,
} from "../../helpers/templates";

export default function TemplatePreview({ template }) {
	return (
		<Box className='template-view'>
			{template === "1" && displayTemplateOne}
			{template === "2" && displayTemplateTwo}
			{template === "3" && displayTemplateThree}
		</Box>
	);
}
