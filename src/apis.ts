import { IBookAPI, IListAPI } from "./types";

const LIST_URL = "https://books-api.nomadcoders.workers.dev/";

// 베스트 셀러 전체 리스트 API
export async function getList(): Promise<IListAPI> {
  return (await fetch(`${LIST_URL}lists`)).json();
}

// 각 카테고리별 책 리스트
export async function getBookList(list_name: string): Promise<IBookAPI> {
  return (await fetch(`${LIST_URL}list?name=${list_name}`)).json();
}
