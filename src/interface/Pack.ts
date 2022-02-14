
export interface Pack {
  name: string,
  description: string,
  version: string
}

export const toPack = (data: any): Pack => {
  return {
    name: data['name'], description: data['description'], version: data['version'],
  }
}

export const toPackList = (data: any): Pack[] => {
  const objects: any[] = data.objects;
  return objects.map((objectPack) => toPack(objectPack.package));
}