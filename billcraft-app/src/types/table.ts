export interface Column {
  header: string;
  field: string;
  isCustom?: boolean;
  customRender?: (row: any) => string;
}
