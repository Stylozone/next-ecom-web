'use client'

import { Button } from '@/components/ui/button'

interface Props {
  page: number
  totalPages: number
  isFetching?: boolean
  onChange: (newPage: number) => void
}

export function Pagination({ page, totalPages, isFetching, onChange }: Props) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        variant="outline"
        disabled={page <= 1 || isFetching}
        onClick={() => onChange(page - 1)}
      >
        Previous
      </Button>
      <span>
        Page
        {' '}
        {page}
        {' '}
        of
        {' '}
        {totalPages}
      </span>
      <Button
        variant="outline"
        disabled={page >= totalPages || isFetching}
        onClick={() => onChange(page + 1)}
      >
        Next
      </Button>
    </div>
  )
}
