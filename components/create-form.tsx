"use client";

import { saveContact } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from '@/components/buttons';

const CreateForm = () => {
  const [state, formAction] = useFormState(saveContact, null);
  return (
    <div>
        <form action={formAction}>
            <div className="mb-5">
                <label htmlFor="userid" className="block text-sm font-medium text-gray-900">User Id</label>
                <input type="text" name="userid" id="userid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukan User Id"/>
                <div id="userid-error" aria-live="polite" aria-atomic="true">
                  <p className="mt-2 text-sm text-red-500">{state?.Error?.userid}</p>
                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="keyid" className="block text-sm font-medium text-gray-900">Key Id</label>
                <input type="text" name="keyid" id="keyid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukan Key Id"/>
                <div id="keyid-error" aria-live="polite" aria-atomic="true">
                  <p className="mt-2 text-sm text-red-500">{state?.Error?.keyid}</p>
                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="expired" className="block text-sm font-medium text-gray-900">Expired Time</label>
                <input type="text" name="expired" id="expired" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukan Expired"/>
                <div id="expired-error" aria-live="polite" aria-atomic="true">
                  <p className="mt-2 text-sm text-red-500">{state?.Error?.expired}</p>
                </div>
            </div>
            <div id="message-error" aria-live="polite" aria-atomic="true">
                  <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                </div>
                <SubmitButton label="simpan"/>
        </form>
    </div>
  );
};

export default CreateForm;