import React from "react"
import DownIcon from "@mui/icons-material/ArrowDropDown"
import UpIcon from "@mui/icons-material/ArrowDropUp"
import SwapVertIcon from "@mui/icons-material/SwapVert"


const cssForIcons = {
  fontSize: "small",
}
const ActiveIconUp = () => {
  return (
    <>
      <UpIcon sx={cssForIcons} />
    </>
  )
}
const ActiveIconDown = () => {
  return (
    <>
      <DownIcon sx={cssForIcons} />
    </>
  )
}

const DisabledIcon = () => {
  return (
    <>
      <SwapVertIcon sx={cssForIcons} />
    </>
  )
}

export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
	console.log("down", down)
	console.log('up', up)
  if (sort === "") {
    return down
  } else if (sort === down) {
    return up
  } else if (sort === up) {
    return ""
  } else {
    return down
  }
}

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = "hw15" }) => {
  const up = "0" + value
  const down = "1" + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const icon = sort === down ? <ActiveIconDown /> : sort === up ? <ActiveIconUp /> : <DisabledIcon />

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback}>
      {icon}
      {/* <img id={id + "-icon-" + sort} src={icon} /> */}
    </span>
  )
}

export default SuperSort
