import { GridCell } from '../../../interfaces/cell'
import { Grid } from '../../../interfaces/grid'
import { GridRow } from '../../../interfaces/row'
import { createEditor } from '../../../plugin/custom'

describe('interfaces/grid', () => {

  const editor = createEditor()

  editor.isGrid = (value): value is Grid => {
    return value.type === 'grid'
  }

  editor.isRow = (value): value is GridRow => {
    return value.type === 'grid-row'
  }

  editor.isCell = (value): value is GridCell => {
    return value.type === 'grid-cell'
  }

  editor.children = [
    {
      type: 'grid',
      children: [
        {
          type: 'grid-row',
          children: [
            {
              type: 'grid-cell',
              children: [
                {
                  children: [
                    { text: 'cell1'}
                  ]
                },
                {
                  children: [
                    { text: 'text1'}
                  ]
                }
              ]
            },
            {
              type: 'grid-cell',
              children: [
                {
                  children: [
                    { text: 'cell2'}
                  ]
                }
              ]
            },
            {
              type: 'grid-cell',
              children: [
                {
                  children: [
                    { text: 'cell3'}
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]

  it('remove', () => {
    Grid.remove(editor, [0])
    expect(editor.children).toEqual([])
  })
})