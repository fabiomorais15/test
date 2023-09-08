import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';


export default function Button({text, primary, onClick}: {text: string, primary: boolean, onClick: () => void}) {
  return (
    <button style={{backgroundColor: primary ? "red" : "white", color:"darkRed"}} onClick={onClick}>{text}</button>
  )
}
