'use client'

import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';
import { useRef } from 'react';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onCancel = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <button 
        type="button" 
        onClick={() => dialogRef.current?.showModal()}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>

      <dialog 
        ref={dialogRef}
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg p-6 open:animate-in closed:animate-out"
        style={{ backdropFilter: 'brightness(0.5)' }}
      >
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Delete Invoice</h2>
          <p className="text-sm text-gray-500">
            Are you sure you want to delete this invoice? This action cannot be undone.
          </p>
          
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            
            <form action={deleteInvoiceWithId} className="inline">
              <button
                type="submit"
                onClick={onCancel}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}