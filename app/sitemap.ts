import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cabuksigorta.com.tr'
  
  // Ürün slug'ları - Bu listeyi productData ile senkron tutuyoruz
  const products = [
    'trafik-sigortasi',
    'kasko',
    'tamamlayici-saglik',
    'ozel-saglik',
    'dask',
    'konut-sigortasi',
    'seyahat-saglik',
    'cep-telefonu'
  ]

  const productUrls = products.map((id) => ({
    url: `${baseUrl}/urunler/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...productUrls,
  ]
}
