import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import api from '../../../services/api'
import { ButtonStyles, Container, Input, Label, LabelUpload } from './styles'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { register, handleSubmit, control } = useForm()
  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      console.log(data)
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />

        <LabelUpload>
          {fileName || (
            <>
              <CloudUploadIcon />
              Carregue a imagem do produto
            </>
          )}
          <input
            type="file"
            id="image-input"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>

        <Controller
          name="category_id"
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="Categorias"
                {...field}
              />
            )
          }}
        ></Controller>

        <ButtonStyles>Adicionar produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewProduct
