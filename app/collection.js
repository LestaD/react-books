
// Atoms
import Button from '@ui/pattern-library/atoms/Button/Button.md'
import HtmlTag from '@ui/pattern-library/atoms/HtmlTag/HtmlTag.md'
import Switch from '@ui/pattern-library/atoms/Switch/Switch.md'
import Row from '@ui/pattern-library/atoms/Row/Row.md'
import Column from '@ui/pattern-library/atoms/Column/Column.md'
import Container from '@ui/pattern-library/atoms/Container/Container.md'
import Layout from '@ui/pattern-library/atoms/Layout/Layout.md'
import Input from '@ui/pattern-library/atoms/Input/Input.md'
import Paper from '@ui/pattern-library/atoms/Paper/Paper.md'
import Pill from '@ui/pattern-library/atoms/Pill/Pill.md'
import Tag from '@ui/pattern-library/atoms/Tag/Tag.md'
import CheckBox from '@ui/pattern-library/atoms/CheckBox/CheckBox.md'
import RadioButton from '@ui/pattern-library/atoms/RadioButton/RadioButton.md'
import Progress from '@ui/pattern-library/atoms/Progress/Progress.md'
import Backdrop from '@ui/pattern-library/atoms/Backdrop/Backdrop.md'
import HoverItem from '@ui/pattern-library/atoms/HoverItem/HoverItem.md'
import Collapsible from '@ui/pattern-library/atoms/Collapsible/Collapsible.md'

// Molecules
import Drawer from '@ui/pattern-library/molecules/Drawer/Drawer.md'
import DropDown from '@ui/pattern-library/molecules/DropDown/DropDown.md'
import DropDownList from '@ui/pattern-library/molecules/DropDownList/DropDownList.md'
import AppBar from '@ui/pattern-library/molecules/AppBar/AppBar.md'
import ComboBox from '@ui/pattern-library/molecules/ComboBox/ComboBox.md'
import ButtonGroup from '@ui/pattern-library/molecules/ButtonGroup/ButtonGroup.md'
import TagPoint from '@ui/pattern-library/molecules/TagPoint/TagPoint.md'
import MaskedInput from '@ui/pattern-library/molecules/MaskedInput/MaskedInput.md'
import Slider from '@ui/pattern-library/molecules/Slider/Slider.md'
import CheckGroup from '@ui/pattern-library/molecules/CheckGroup/CheckGroup.md'
import RangeInput from '@ui/pattern-library/molecules/RangeInput/RangeInput.md'
import Modal from '@ui/pattern-library/molecules/Modal/Modal.md'
import DropDownHover from '@ui/pattern-library/molecules/DropDownHover/DropDownHover.md'
import ToolTip from '@ui/pattern-library/molecules/ToolTip/ToolTip.md'

import { atom, molecule, organism, collection } from './util'


export default collection([
  // atoms
  atom('Button', Button),
  atom('HtmlTag', HtmlTag),
  atom('Switch', Switch),
  atom('Row', Row, ['HtmlTag']),
  atom('Column', Column, ['HtmlTag']),
  atom('Container', Container),
  atom('Layout', Layout, ['HtmlTag']),
  atom('Input', Input),
  atom('Paper', Paper),
  atom('Pill', Pill),
  atom('Tag', Tag),
  atom('Checkbox', CheckBox),
  atom('RadioButton', RadioButton),
  atom('Progress', Progress),
  atom('Loader'),
  atom('Notification'),
  atom('Backdrop', Backdrop),
  atom('HoverItem', HoverItem, ['HtmlTag']),
  atom('Collapsible', Collapsible),

  // Molecules
  molecule('DropDown', DropDown, ['Paper']),
  molecule('DropDownList', DropDownList, ['DropDown', 'Input', 'Column']),
  molecule('AppBar', AppBar),
  molecule('ComboBox', ComboBox, ['DropDown', 'Input', 'Button', 'Row', 'Column']),
  molecule('ButtonGroup', ButtonGroup, ['Row']),
  molecule('RangeInput', RangeInput, ['Input', 'Row']),
  molecule('TagPoint', TagPoint, ['Row', 'Pill']),
  molecule('MaskedInput', MaskedInput, ['Input']),
  molecule('Slider', Slider),
  molecule('Drawer', Drawer, ['Paper']),
  molecule('Calendar', undefined, ['DateTimePicker', 'Button', 'Paper']),
  molecule('Autocomplete Input', undefined, ['Input', 'DropDown']),
  molecule('ContextMenu', undefined, ['DropDownList']),
  molecule('CheckGroup', CheckGroup, ['Checkbox', 'Layout']),
  molecule('Modal', Modal, ['Paper', 'Backdrop']),
  molecule('ExpansionRow'),
  molecule('RadioGroup', undefined, ['RadioButton']),
  molecule('AutocompleteInput'),
  molecule('DropDownHover', DropDownHover, ['DropDown']),
  molecule('ToolTip', ToolTip),


  // Organisms
  organism('Calendar', undefined, ['DateTimePicker', 'Button', 'DropDown']),
  organism('MultiSelect Input', undefined, ['Input', 'Tag', 'DropDown']),
  organism('DateTimePicker'),
  organism('MenuBar', undefined, ['ContextMenu']),
  organism('Stepper'),
  organism('NotificationScreen', undefined, ['Notification']),
  organism('ExpansionPanel', undefined, ['ExpansionRow']),
  organism('Tabs'),
])
