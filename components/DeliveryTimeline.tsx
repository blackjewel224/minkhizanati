import { DeliveryCheckpoint } from '../data/items';

export function DeliveryTimeline({ checkpoints }: { checkpoints: DeliveryCheckpoint[] }) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="font-display text-lg font-semibold text-sand-900">Delivery timeline</h2>
      <ol className="mt-4 space-y-4 border-l-2 border-sand-200 pl-4">
        {checkpoints.map((checkpoint) => (
          <li key={checkpoint.id} className="relative">
            <span
              className={`absolute -left-[11px] top-1 h-5 w-5 rounded-full border-2 ${
                checkpoint.completed ? 'border-sand-500 bg-sand-500' : 'border-sand-300 bg-white'
              }`}
            />
            <div className="rounded-2xl bg-sand-50 p-4">
              <p className="text-sm font-semibold text-sand-800">{checkpoint.title}</p>
              <p className="text-xs text-sand-600">{checkpoint.description}</p>
              {checkpoint.timestamp && <p className="text-[11px] text-sand-400">{checkpoint.timestamp}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
