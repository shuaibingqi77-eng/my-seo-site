import { IndustryDataArray } from '@/types/index'
import data from '@/data.json'

export function getAllIndustries(): IndustryDataArray {
  return data
}

export function getIndustryBySlug(slug: string) {
  return data.find((item) => item.slug === slug)
}